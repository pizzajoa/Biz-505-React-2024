import "../css/MemoMain.css";
import "../Memo.js";
const MemoMain = () => {
  return (
    <body>
      <header>
        <h3>오늘은 내 생애의 가장 젊은날</h3>
      </header>
      <section class="main">
        <div class="aside">
          <form class="date">
            <input
              type="text"
              class="todate"
              value="2024-02-23"
              name="toDate"
            />
            <input
              type="text"
              class="totime"
              value="10:00:00"
              name="toTime"
            />
            <input type="button" class="btn_new" value="새로작성" />
          </form>
          <ul>
            <li>
              <img src="#" width="20px" />
              <span>설산에서 고행을</span>
            </li>
            <li>
              <img src="#" width="20px" />
              <span>없는 사막이다 보이는</span>
            </li>
            <li>
              <img src="#" width="20px" />
              <span>하는 온갖 과실이</span>
            </li>
          </ul>
        </div>
        <div class="aside">
          <form class="input">
            <input
              class="tosubject"
              type="text"
              placeholder="제목을 입력하세요"
              name="toSubject"
            />
            <input
              class="tomemo"
              type="text"
              placeholder="메모를 입력하세요"
              name="toMemo"
            />
            <div class="btn_con">
              <input type="file" name="toFile" />
              <input type="button" value="저장" />
            </div>
          </form>
        </div>
      </section>
      <footer>
        <address>CoptRight &copy; callor@callor.com</address>
      </footer>
    </body>
  );
};

export default MemoMain;
