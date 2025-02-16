import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from '@/components/button/button'

import s from './StartGame.module.scss'

type Stage = '1' | '2' | '3'

const stageRoutes: Record<Stage, string> = {
  '1': '/game/level/stage1',
  '2': '/game/level/stage2',
  '3': '/game/level/stage3',
};


// 30om 110om 290  слева приемник .  спрва матрица Последовательная схема Параллельная схема Смешанная схема
// int time = 500;
// int data[5] = {0,
//   1,0,
//   0,1
// };
// void setup() {
//   delay(time);
//   data[0] = 1;
// }
// void loop() {
//   SendData();
// } 'int time = 500;\nint data[21] = {0,\n0,0,0,0,0,\n0,0,0,0,0,\n0,0,0,0,0,\n0,0,0,0,0\n};'

// int time = 500;
// int data[21] = {0,
//   0,0,0,0,0,
//   0,0,0,0,0,
//   0,0,0,0,0,
//   0,0,0,0,0
// };

// int Start = Data[0];
// int Led_11 = 0;
// int Led_12 = Data[2];
// int Led_21 = 0;
// int Led_22 = 0;
// void setup() {
// }
// void loop() {
//   if (Start == 1) {
//     if (Led_11 == 1) digitalWrite(10, HIGH);
//     if (Led_12 == 1) digitalWrite(11, HIGH);
//     if (Led_21 == 1) digitalWrite(12, HIGH);
//     if (Led_22 == 1) digitalWrite(13, HIGH);
//   }
//   UpdateData();
// }
const stageArray: Stage[] = ['1', '2', '3'];

export const StartGame = () => {
  const [startStage, setStartStage] = useState<Stage>()

  const navigate = useNavigate();
  const target = { a: 1, b: 2 };
  const source = { b: 4, c: 5 };

  const result = Object.assign(target, source);
  console.log(result);
  useEffect(() => {
    if (startStage) {
      navigate(stageRoutes[startStage]);
    }
  }, [startStage, navigate]);

  const handleClick = (st: Stage) => {
    setStartStage(st);
  };

const best =  (a: number, b: number, c: number) => {
  return console.log(b * c / (b + c) + a)
}
best(140, 200, 180)

  return (
    <div className={s.startGame}>
      <div className={s.startGameContainer}>
        <h1>Уровень 1</h1>
        <div className={s.menu}>
          {stageArray.map((stage, index) => {
            return (
              <Button className={s.startButton} key={index} onClick={() => handleClick(stage)}>
                Стадия {stage}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
