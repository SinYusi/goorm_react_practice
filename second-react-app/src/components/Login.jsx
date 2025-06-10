// - 아이디, 비밀번호 정보를 객체 state 로 관리해주세요.
//     - 아이디 : mandoo
//     - 비밀번호 : mandoo123
// - 올바른 아이디, 비밀번호라면 “로그인 성공!” 이라는 alert 창이 뜨고, input 창을 초기화해줍니다.
// - 올바르지 않다면 “로그인 실패하였습니다.” 라는 alert 창이 뜹니다.

import { useState } from "react";

export default function Login() {
  const ID = "mandoo";
  const PASSWORD = "mandoo123";
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const checkLogin = () => {
    if (userId === ID && userPassword === PASSWORD) {
      alert('로그인 성공');
      setUserId("");
      setUserPassword("");
    }
    else alert('로그인 실패!');
  }

  return (
    <main>
      <h2>로그인</h2>
      <form onSubmit={checkLogin}>
        아이디: <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} /> <br />
        비밀번호: <input type="password" value={userPassword} onChange={e => setUserPassword(e.target.value)} /> <br />
        <button type="submit">로그인</button>
      </form>
    </main>
  )
}