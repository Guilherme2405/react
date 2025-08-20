import { useState } from "react";
import { evaluate } from "mathjs";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles.module.scss";

function BtnClearFull({ onClick }: { onClick: () => void }) {
  return (
    <button className={styles.btnClear} onClick={onClick}>
      <span>C</span>
    </button>
  );
}

function BtnClear({ onClick }: { onClick: () => void }) {
  return (
    <button className={styles.btnClear} onClick={onClick}>
      <span>C</span>
    </button>
  );
}

function BtnResult({ onClick }: { onClick: () => void }) {
  return (
    <button className={styles.btnResult} onClick={onClick}>
      <span>=</span>
    </button>
  );
}

type BtnNumsProps = {
  value: string;
  onClick: () => void;
  children: string;
};
function BtnNums({ value, onClick, children }: BtnNumsProps) {
  return (
    <button className={styles.btnNums} value={value} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}

type BtnOperatorsProps = {
  value: string;
  onClick: () => void;
  children: string;
};

function BtnOperators({ value, onClick, children }: BtnOperatorsProps) {
  return (
    <button className={styles.btnOperators} value={value} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}

type TextInputProps = {
  value: string | null;
};

function TextInput({ value }: TextInputProps) {
  return <input type="text" className={styles.text} value={value ?? ""} />;
}

function BtnBackspace({ onClick }: { onClick: () => void }) {
  return (
    <button className={styles.btnBackspace} onClick={onClick}>
      <span>←</span>
    </button>
  );
}

function Calculator() {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<number | string | null>(null);
  const [historyList, setHistoryList] = useState<object[]>([]);

  function cleanValue() {
    setText("");
  }

  function calculate() {
    const result = evaluate(text);
    setText(result);
    setResult(String(text.toLocaleString()));

    if (result !== null) {
      const resultad = { conta: text + " = " + result.toLocaleString("pt-BR") };
      result.toLocaleString("pt-BR");
      setHistoryList((prev) => [...prev, resultad]);
    }
  }

  function cleanListCount() {
    setHistoryList([]);
  }

  return (
    <div className={styles.main}>
      <div className={styles.bgContent}>
        <TextInput value={text} />

        <div className={styles.BtnNumPositional}>
          <BtnClear onClick={cleanValue} />
          <BtnClearFull onClick={cleanListCount} />
          <BtnBackspace onClick={() => setText(text.slice(0, -1))} />
          <BtnOperators value="/" onClick={() => setText((t) => t + "/")}>
            /
          </BtnOperators>
        </div>
        <div className={styles.divBtnNums}>
          <div className={styles.BtnNumPositional}>
            <BtnNums value="7" onClick={() => setText((t) => t + "7")}>
              7
            </BtnNums>
            <BtnNums value="8" onClick={() => setText((t) => t + "8")}>
              8
            </BtnNums>
            <BtnNums value="9" onClick={() => setText((t) => t + "9")}>
              9
            </BtnNums>

            <BtnOperators value="*" onClick={() => setText((t) => t + "*")}>
              *
            </BtnOperators>
          </div>
          <div className={styles.BtnNumPositional}>
            <BtnNums value="4" onClick={() => setText((t) => t + "4")}>
              4
            </BtnNums>
            <BtnNums value="5" onClick={() => setText((t) => t + "5")}>
              5
            </BtnNums>
            <BtnNums value="6" onClick={() => setText((t) => t + "6")}>
              6
            </BtnNums>

            <BtnOperators value="-" onClick={() => setText((t) => t + "-")}>
              -
            </BtnOperators>
          </div>
          <div className={styles.BtnNumPositional}>
            <BtnNums value="1" onClick={() => setText((t) => t + "1")}>
              1
            </BtnNums>
            <BtnNums value="2" onClick={() => setText((t) => t + "2")}>
              2
            </BtnNums>
            <BtnNums value="3" onClick={() => setText((t) => t + "3")}>
              3
            </BtnNums>

            <BtnOperators value="+" onClick={() => setText((t) => t + "+")}>
              +
            </BtnOperators>
          </div>
          <div className={styles.BtnNumPositional}>
            <BtnOperators value="%" onClick={() => setText((t) => t + "%")}>
              %
            </BtnOperators>
            <BtnNums value="0" onClick={() => setText((t) => t + "0")}>
              0
            </BtnNums>

            <BtnNums value="," onClick={() => setText((t) => t + ".")}>
              ,
            </BtnNums>
            <BtnResult
              onClick={() => {
                calculate();
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.histAcc}>
        <div className="p-3">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div>
              <span>HISTORICO DE CONTAS</span>
            </div>

            <button className={styles.btnResult} onClick={cleanListCount}>
              X
            </button>
          </div>
          <div className="historyList">
            {historyList.map((item, i) => (
              <div key={i}>{item.conta}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} //function BodyCalculator() {}

export default function Calculators() {
  return (
    <div className={styles.calculator}>
      <Calculator />
    </div>
  );
}
