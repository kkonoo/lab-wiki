/* "여기 헷갈려요" 받는 쪽 — Google Sheet에 붙인 Apps Script (확장 프로그램 → Apps Script에 붙여넣기)
   배포: 배포 → 새 배포 → 유형 "웹 앱" · 실행 사용자 "나" · 액세스 권한 "모든 사용자"
   배포 URL(…/exec)을 assets/js/feedback.js 의 FEEDBACK_URL에 넣는다.
   코드를 고친 뒤에는 "배포 관리 → 수정 → 새 버전"으로 다시 배포해야 반영된다(URL은 그대로). */

// 시트 메뉴(확장 프로그램 → Apps Script)에서 만든 스크립트면 비워 둔다.
// script.google.com에서 따로 만든 프로젝트면 시트 주소의 /d/ 와 /edit 사이 값을 넣는다.
const SHEET_ID = "";
const SHEET_NAME = "피드백";
const HEADER = ["시각", "페이지", "문서", "절", "선택한 문장", "내용", "이름", "처리"];
const MAX = { page: 300, title: 200, section: 200, quote: 500, message: 2000, name: 40 };

function doPost(e) {
  let d;
  try { d = JSON.parse(e.postData.contents); } catch (err) { return reply({ ok: false }); }
  if (d.website) return reply({ ok: true });            // 숨은 칸을 채운 건 봇 — 저장하지 않고 성공처럼 돌려준다
  const message = clean(d.message, MAX.message);
  if (!message) return reply({ ok: false });

  const lock = LockService.getScriptLock();             // 동시에 들어와도 행이 겹치지 않게
  lock.waitLock(10000);
  try {
    sheet().appendRow([new Date(), clean(d.page, MAX.page), clean(d.title, MAX.title), clean(d.section, MAX.section),
      clean(d.quote, MAX.quote), message, clean(d.name, MAX.name), ""]);
  } finally {
    lock.releaseLock();
  }
  return reply({ ok: true });
}

function sheet() {
  const ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADER);
    sh.setFrozenRows(1);
  }
  return sh;
}

/* 길이 제한 + =,+,-,@로 시작하면 수식으로 실행되지 않게 앞에 ' */
function clean(v, n) {
  const s = String(v == null ? "" : v).trim().slice(0, n);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function reply(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
