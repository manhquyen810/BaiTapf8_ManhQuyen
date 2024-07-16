export const htmlQuestion = () => {
  return `<div class="quizGame__question h-100">
        <div class="row h-100">
          <div class="col-12 quizGame__top">
            <div class="quizGame__top--inner">
              <div class="quizGame__top--timer">
                <div class="quizGame__top--timer-total">
                  <div
                    class="quizGame__top--timer-progress"
                    style="width: 100%"
                  ></div>
                </div>
              </div>
              <div
                class="quizGame__top--inner d-flex justify-content-between align-items-center"
              >
                <div class="quizGame__top--inner-left">
                  <div class="d-flex align-items-center">
                    <div class="quizGame__top--step top-block">
                      <span id="current">1</span><span id="total">/8</span>
                    </div>
                    <div class="quizGame__streak">
                      <div class="streak-line-left"></div>
                      <div class="streak-line-right"></div>
                      <div
                        class="quizGame__streak--status"
                        style="width: 0%; padding: 0px"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="quizGame__top--inner-right">
                  <div class="quizGame__top--score">Score: 0</div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 animate__animated animate__slideInLeft quizGame__question--main-content"
          >
            <div
              class="quizGame__question--main-inner d-flex flex-column justify-content-lg-between h-100"
              style="
                background: url('./image/forest.jpg') center center / cover
                  no-repeat fixed;
              "
            >
              <div class="quizGame__question--text w-100">
                <div
                  class="d-flex flex-column justify-content-center align-items-center text-center overlay"
                >
                  <h3>
                    Thực hiện giãn cách xã hội tối thiểu trong bao nhiêu ngày ?
                  </h3>
                </div>
              </div>
              <div class="quizGame__answers w-100">
                <div
                  class="quizGame__answers--inner d-flex flex-column flex-lg-row justify-content-lg-between"
                >
                  <div
                    class="quizGame__answer--item"
                    style="width: calc(25% - 12.5px)"
                  >
                    <div
                      class="quizGame__answer--item-inner overlay d-flex justify-content-center align-items-center text-center"
                      data-id="1"
                    >
                      15 ngày
                    </div>
                  </div>
                  <div
                    class="quizGame__answer--item"
                    style="width: calc(25% - 12.5px)"
                  >
                    <div
                      class="quizGame__answer--item-inner overlay d-flex justify-content-center align-items-center text-center"
                      data-id="2"
                    >
                      7 ngày
                    </div>
                  </div>
                  <div
                    class="quizGame__answer--item"
                    style="width: calc(25% - 12.5px)"
                  >
                    <div
                      class="quizGame__answer--item-inner overlay d-flex justify-content-center align-items-center text-center"
                      data-id="3"
                    >
                      21 ngày
                    </div>
                  </div>
                  <div
                    class="quizGame__answer--item"
                    style="width: calc(25% - 12.5px)"
                  >
                    <div
                      class="quizGame__answer--item-inner overlay d-flex justify-content-center align-items-center text-center"
                      data-id="4"
                    >
                      1 tháng
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 quizGame__result text-center text-uppercase"></div>
        </div>
        <audio>
          <source
            type="audio/mp3"
            src="./mp3/a7d86a47a36c9684c1eed76ec551f7ba.mp3"
          />
        </audio>
      </div>`;
};
