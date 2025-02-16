import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import s from "./VirtualKeyboard.module.scss";

import { Button, layout } from "../../app/data";
import { RootState } from "../../app/store";
import { CurrentCharProps } from "../../model/currentChar/currentChar-reducer";
import { UserCharProps } from "../../model/userChar/userChar-reducer";


export const VirtualKeyboard = () => {
  const { char, id } = useSelector<RootState, UserCharProps>(state => state.userChar)
  const { char: highlightedKey } = useSelector<RootState, CurrentCharProps>(
    state => state.currentChar
  )
  // const [highlightedKey, setHighlightedKey] = useState<string>('')

  useEffect(() => {
    // setHighlightedKey(currentChar)
  }, [])

  const getButtonClassName = useCallback(
    (button: Button) => {
      const classes = [s.Button]

      if (button.labels.includes(highlightedKey.toUpperCase())) {
        classes.push(s.CurrentButton)
      }

      if (char !== highlightedKey && button.labels.includes(char?.toUpperCase())) {
        if (id === button.id) {
          classes.push(s.UserButton)
        }
      }

      if (button.labels.includes("⇦Backspace")) {
        classes.push(s.ButtonBackSpace)
      }

      if (button.labels.includes("Tab↹")) {
        classes.push(s.ButtonTab)
      }

      if (button.labels.includes("|")) {
        classes.push(s.ButtonLine)
      }

      if (button.labels.includes("CapsLock")) {
        classes.push(s.ButtonCapsLock)
      }

      if (button.labels.includes("⇧ Shift")) {
        classes.push(s.ButtonShift)
      }

      if (button.labels.includes("Enter ⏎")) {
        classes.push(s.ButtonEnter)
      }

      if (button.labels.includes("Ctrl")) {
        classes.push(s.ButtonCtrl)
      }

      if (button.labels.includes("Alt")) {
        classes.push(s.ButtonAlt)
      }

      if (button.labels.includes("Space")) {
        classes.push(s.ButtonSpace)
      }

      if (button.labels.includes("Win")) {
        classes.push(s.ButtonWin)
      }
      if (button.labels.includes("☰")) {
        classes.push(s.ButtonWin)
      }
      // Add additional classes based on button labels

      return classes.join(" ")
    },
    [char, id, highlightedKey]
  );

  return (
    <div className={s.Keyboard}>
      {layout.map((row, index) => (
        <div className={s.Row} key={index}>
          {row.map(button => (
            <div className={getButtonClassName(button)} key={button.id}>
              {button.labels.map((label, index) => (
                <span
                  className={`${s.ButtonDescription} ${
                    label === highlightedKey?.toUpperCase() ? s.UserButtonDescription : ""
                  }`}
                  key={index}
                >
                  {label}
                </span>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
