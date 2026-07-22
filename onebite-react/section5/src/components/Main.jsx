import "./Main.css";

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나만 존재해야한다. ( 단, 최상위 태그 없이 빈태그로 선언은 가능)
const Main = () => {
  const user = {
    name: "이성연",
    isLogin: true
  }
  
    if(user.isLogin) return <div className="login">로그인</div>
    else return <div>로그아웃</div>  
}

export default Main;