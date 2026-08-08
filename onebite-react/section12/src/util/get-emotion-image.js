// 브라우저의 캐싱 된 이미지 호출 시 아래와 같이 사용
// 10~100만처럼 많은 이미지 호출 시에는 public폴더에 보관이 좋을수도 있음.
import emotion1 from "./../assets/emotion/emotion1.png";
import emotion2 from "./../assets/emotion/emotion2.png";
import emotion3 from "./../assets/emotion/emotion3.png";
import emotion4 from "./../assets/emotion/emotion4.png";
import emotion5 from "./../assets/emotion/emotion5.png";

export function getEmotionImage (emotionId) {
    switch(emotionId) {
        case 1 : return emotion1;
        case 2 : return emotion2;
        case 3 : return emotion3;
        case 4 : return emotion4;
        case 5 : return emotion5;
        default : return null;
    }
}
