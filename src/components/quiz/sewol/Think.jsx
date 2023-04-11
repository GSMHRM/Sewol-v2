import React from "react";
import "../../../styles/quiz.css";

const Think = () => {
  return (
    <div>
      <div className="quizBox">
        <div className="thinkBox">
          <p className="header">세월호 참사는 인권문제입니다.</p>
          <p  className="content1">
            국가는 개인의 인권을 보장해야 합니다. 어떻게 인권을 보장할 수
            있을까요?<br/> 첫째, 국가는 개인이 가진 권리를 침해해서는 안 됩니다. 이를
            불가침성이라고 합니다.<br/> 둘째, 개인이 다른 누군가로부터 권리를
            침해당하지 않도록 보호해 주어야 합니다.<br/> 셋째, 누군가가 권리를
            침해당했을 때, 국가는 이를 구제해 주어야 합니다.
          </p>
          <p className="content1">
            우리가 세월호 참사를 두고 정부의 책임을 묻는 것은 이 세 가지 국가의
            의무 때문입니다. 학생들은 안전하게 여행할 권리를 누려야 했습니다.
            그러나 해운사는 이윤에 눈이 멀어 안전 규정을 어기면서 무리하게
            운항해 학생들의 권리를 침해했습니다. 그리고 정부는 이를 감독하지
            못한 책임이 있습니다. 또한 위기에 처했을 때 우리는 국가로부터
            구조받을 권리가 있습니다. 그러나 국가는 이를 제대로 보장해주지
            못했습니다.
          </p>
          <p className="content1">
            세월호 참사도 언젠가는 우리의 뇌리에서 잊히겠지만, 수많은 희생가들은
            잊히지 않아야 합니다. 그들을 잊지 않고 그 희생의 의미를 기억해야
            합니다. 그들의 죽음은, 국가는 국민의 안전을 위해 존재해야 하며
            인권을 보장해 주어야 한다는 사실을 너무도 아프게 일깨워줍니다.
          </p>
          <p className="source">- 구정화의 청소년을 위한 인권에세이에서 -</p>
        </div>
      </div>
    </div>
  );
};

export default Think;
