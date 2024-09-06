import {SlowComponent} from './slowComponent/SlowComponent';
import {Input} from "./Input";


//find the problem and fix it as part of composition optimization, memo, children

export const Task_3 = () => {
    console.log('Task3 rendering')

    return (
        <div>
            <div>Lags when change value</div>
            <Input/>
            <SlowComponent/>
        </div>
    );
};
