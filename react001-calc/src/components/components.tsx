import { useEffect, useState } from 'react';
import { evaluate } from 'mathjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles.module.scss';



function BtnClear({ onClick }: { onClick: () => void }) {
    return (
        <button className={styles.btnClear} onClick={onClick}>
            <span>C</span>
        </button>
    )
}

function BtnResult({ onClick }: { onClick: () => void }) {
    return (
        <button className={styles.btnResult} onClick={onClick}>
            <span>=</span>
        </button>
    )
}

type BtnNumsProps = {
    value: string;
    onClick: () => void;
    children: string;
}
function BtnNums({ value, onClick, children }: BtnNumsProps) {

    return (
        <button className={styles.btnNums} value={value} onClick={onClick}>
            <span>{children}</span>
        </button>
    )
}

type BtnOperatorsProps = {
    value: string;
    onClick: () => void;
    children: string;
}

function BtnOperators({ value, onClick, children }: BtnOperatorsProps) {
    return (
        <button className={styles.btnOperators} value={value} onClick={onClick}>
            <span>{children}</span>
        </button>
    )
}


type TextInputProps = {
    value: string | null;
}

function TextInput({ value }: TextInputProps) {

    return (
        <div className={styles.textInput}>
            <input type="text" className={styles.text} value={value ?? ''} />
        </div>
    )
}

function BtnBackspace({ onClick }: { onClick: () => void }) {
    return (
        <button className={styles.btnBackspace} onClick={onClick}>
            <span>←</span>
        </button>
    )
}


function Calculator() {
    const [text, setText] = useState<string>('');
    const [result, setResult] = useState<number | string | null>(null);
    const [historyList, setHistoryList] = useState<object[]>([]);


    function cleanValue() {
        setText('');
    }

    function calculate() {
        const result = evaluate(text);
        setText(result);
        setResult(String((text)));
    }




 useEffect(() => {
    if (result !== null) {
        const resultad = { conta: result + ' = ' + text };
        setHistoryList(prev => [...prev, resultad]);
    }
}, [result, text]);


    return (

        <div className={styles.btnLogic}>
            <TextInput value={text} />
            <BtnClear onClick={cleanValue} />
            <div className={styles.divBtnNums}>
                <BtnResult onClick={() => {
                    calculate();
                }} />
                <BtnNums value="," onClick={() => setText(t => t + ",")}>,</BtnNums>
                <BtnNums value="0" onClick={() => setText(t => t + "0")}>0</BtnNums>
                <BtnNums value="1" onClick={() => setText(t => t + "1")}>1</BtnNums>
                <BtnNums value="2" onClick={() => setText(t => t + "2")}>2</BtnNums>
                <BtnNums value="3" onClick={() => setText(t => t + "3")}>3</BtnNums>
                <BtnNums value="4" onClick={() => setText(t => t + "4")}>4</BtnNums>
                <BtnNums value="5" onClick={() => setText(t => t + "5")}>5</BtnNums>
                <BtnNums value="6" onClick={() => setText(t => t + "6")}>6</BtnNums>
                <BtnNums value="7" onClick={() => setText(t => t + "7")}>7</BtnNums>
                <BtnNums value="8" onClick={() => setText(t => t + "8")}>8</BtnNums>
                <BtnNums value="9" onClick={() => setText(t => t + "9")}>9</BtnNums>
            </div>
            <div className={styles.divBtnOperators}>
                <BtnOperators value="/" onClick={() => setText(t => t + "/")}>/</BtnOperators>
                <BtnOperators value="*" onClick={() => setText(t => t + "*")}>*</BtnOperators>
                <BtnOperators value="-" onClick={() => setText(t => t + "-")}>-</BtnOperators>
                <BtnOperators value="+" onClick={() => setText(t => t + "+")}>+</BtnOperators>
                <BtnOperators value="%" onClick={() => setText(t => t + "%")}>%</BtnOperators>
                <BtnBackspace onClick={() => setText(text.slice(0, -1))} />
            </div>
                <div className='historyList'>
                    {historyList.map((item, i) => (
                        <div key={i}>{item.conta}</div>
                    ))}
                </div>
        </div>
    )

}    //function BodyCalculator() {}

    export default function Calculators() {
        return (
            <div className={styles.calculator}>
                <Calculator />
            </div>
        )
    }
