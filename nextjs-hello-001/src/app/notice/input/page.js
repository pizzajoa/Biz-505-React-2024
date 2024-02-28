import styles from "@/css/Notice.Input.module.css";
// api/notice.js 에 선언된 createNotice 함수에 넣겟다
import { createNotice } from "@/app/api/notice";
/*
공지사항 작성하기
작성자, 제목, 내용, 중요도
저장버튼 
*/
// notice/input/page.js
export default () => {
  const actionHandler = async (formData) => {
    "use server";
    console.log(formData);
    // action에 의해서 전달된 formData를 JSON의 데이터로 변환하기
    const noticeData = {
      m_author: formData.get("m_author"),
      m_flag: formData.get("m_flag"),
      m_subject: formData.get("m_subject"),
      m_content: formData.get("m_content"),
    };
    await createNotice(noticeData);
  };

  return (
    <form
      action={actionHandler}
      method="POST"
      className={styles.form}
    >
      <div>
        <input placeholder="작성자" name="m_author"></input>
      </div>
      <div>
        <select name="m_flag">
          <option value="0">중요도 선택</option>
          <option value="1">중요공지</option>
          <option value="2">일반공지</option>
          <option value="3">지난공지</option>
        </select>
      </div>
      <div>
        <input placeholder="제목" name="m_subject"></input>
      </div>
      <div>
        <textarea
          placeholder="제목"
          rows="10"
          name="m_content"
        ></textarea>
      </div>
      <div>
        <input type="submit" value="저장"></input>
      </div>
    </form>
  );
};
