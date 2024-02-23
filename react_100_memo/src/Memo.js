document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("btn_con");
  const m_seq = btn.dataset.m_seq;
  btn?.addEventListener("click", (e) => {
    const target = e.target;
    if (target.value === "수정") {
      return document.location.replace(`/${m_seq}/update`);
    } else if (target.value === "삭제") {
      if (confirm("삭제하시겠습니까?")) {
        document.location.href = `/${m_seq}/delete`;
      } else {
        return false;
      }
    } else if (target.value === "리스트") {
      return document.location.replace("/");
    }
  });
});
