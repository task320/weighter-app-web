import { FC } from 'react';

import dayjs from 'dayjs';

import WeightData from '../../lib/WeightData'

const WeightList:FC<{weightList:WeightData[]}> = ({weightList}) => {
    var dispWeightDataList = [];
    for(var data of weightList){
        dispWeightDataList.push(
            <tr className="weight_data" key={data.dataId}>
                <td>{dayjs(data.createAt).format("YYYY/MM/DD HH:mm:ss")} </td>
                <td>{data.weight.toFixed(1)} Kg</td>
            </tr>
        );
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>記録時間</th>
                        <th>体重</th>
                    </tr>
                </thead>
                <tbody>
                    {dispWeightDataList}
                </tbody>
            </table>
        </div>
    );
}

export default WeightList;