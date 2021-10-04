import React, {useCallback, memo, useState, useEffect} from "react";
import moment from "moment";

import TrianlgeArrowIcon from "../../assets/icons/TriangleArrow.svg";
import Input from "../../components/Input/index";
import Switch from "../../components/Switch";
import Deadline from "../../components/Deadline";

import './styles.scss';
import InfoBlock from "../../components/InfoBlock";

const SavingsCalculator = () => {

    const [ amountOfMoney, setAmountOfMoney ] = useState(0);
    const [ isCalculatedByTotalAmount, setCalculateByTotalAmount] = useState(false);
    const [ month, setMonth ] = useState(new Date());
    const [ deposit, setDeposit] = useState(0);
    const [ amountOfMonth, setAmountOfMonth ] = useState(0);
    const [ totalMoney, setTotalMoney ] = useState(0);

    const calculateByDeposit = useCallback(() => {
        const depositByMonth = Math.floor(amountOfMoney / amountOfMonth);
        if(amountOfMonth === 0)
        {
            setDeposit(amountOfMoney);
        }
        else {

            setDeposit(depositByMonth);
        }
    }, [amountOfMoney, amountOfMonth, setDeposit]);

    const calculateByTotal = useCallback(() => {
        setTotalMoney(amountOfMoney * amountOfMonth);
    }, [amountOfMoney, amountOfMonth]);

    const handleInputChange = useCallback((event) => {
        const { value } = event.target;
        setAmountOfMoney(value);

        calculateByDeposit();
    }, [calculateByDeposit]);

    const handleSwitchChange = useCallback(() => {
        if(!isCalculatedByTotalAmount)
        {
            setCalculateByTotalAmount(true);
            calculateByDeposit();
        }
        else {
            setCalculateByTotalAmount(false);
        }

    }, [isCalculatedByTotalAmount, calculateByDeposit]);

    const monthDiff = useCallback(() => {
        const startDate = new Date();
        const endDate = new Date(month);
        let diff = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        diff += endDate.getMonth() - startDate.getMonth();

        setAmountOfMonth(diff);
    },[month]);

    useEffect(() => {
        monthDiff();

        if(isCalculatedByTotalAmount)
        {
            calculateByDeposit();
        }
        else {
            calculateByTotal();
        }

    }, [month, monthDiff, isCalculatedByTotalAmount, handleSwitchChange, calculateByTotal, calculateByDeposit]);


    const increaseMonth = useCallback(() => {
        setMonth(moment(month).subtract(1, 'month'));
    }, [month]);

    const decreaseMonth = useCallback(() => {
        setMonth(moment(month).add(1, 'month'));
    }, [month]);

    const date = moment(month).format('MMMM, YYYY');

    return(
        <div className="container">
            <div className="savings-calculator__block">
                <img src={TrianlgeArrowIcon} alt="icon"/>
                <span className="savings-calculator__title">
                    Let’s plan your saving goal
                </span>
            </div>
            <div className="savings-calculator">
                <div className="savings-calculator__wrapper">
                        <h1 className="savings-calculator__header">Savings <br/>calculator</h1>
                        <Switch
                            label="Calculate by total amount"
                            name="switch"
                            checked={isCalculatedByTotalAmount}
                            onCheckChange={handleSwitchChange}
                        />
                        <Input
                            label={isCalculatedByTotalAmount? "Monthly amount" : "Total amount" }
                            name="input"
                            value={amountOfMoney}
                            onChange={handleInputChange} />
                        <Deadline
                            text={isCalculatedByTotalAmount? "Reach goal by" : "Save until"}
                            deadline={month}
                            incrementMonth={increaseMonth}
                            decrementMonth={decreaseMonth}
                        />
                        <InfoBlock
                            data={isCalculatedByTotalAmount ? deposit : totalMoney}
                            isCalculated={isCalculatedByTotalAmount?  "Monthly amount" : "Total amount" }
                            text={
                                isCalculatedByTotalAmount ?
                                    `You are planning  ${amountOfMonth} monthly deposits to reach your $${amountOfMoney} goal by ${date}.`
                                    : `You are saving ${amountOfMoney} monthly to save $${totalMoney} by ${date}.`
                            }
                        />
                        <button className="finish-btn">
                            Finish
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default memo(SavingsCalculator);
