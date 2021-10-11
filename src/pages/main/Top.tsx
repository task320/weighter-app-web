import React, {useContext, useEffect, useRef, useState} from 'react';
import {useHistory} from "react-router-dom";

import { API, Auth } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";
import {AmplifySignOut} from "@aws-amplify/ui-react";
import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";
import * as mutations from '../../graphql/mutations';
import {listWeights}  from '../../graphql/queries';

import { StateUserContext } from '../../App';
import WeightList from '../list/WeightList';
import WeightData from '../../lib/WeightData'
import { CreateWeightMutation, ListWeightsQuery, Weight } from '../../API';

// WeightList props
var data: WeightData[]  = [] ;

function Top() {
  var stateUser = useContext(StateUserContext);
  var location = useHistory();
  var inputElementWeight = useRef<HTMLInputElement>(null);
  const [propsWeightData, setPropsWeightData] = useState(data);

  useEffect(() => {
    console.log("[Top] start fetch weight data");
    fetchWeightData();
    console.log("[Top] end fetch weight data");

  }, []);

  const fetchWeightData = async() => {
    let filter = {
      userId: {
          eq: stateUser.sub as string
      }
    };
    const result = await API.graphql({ query: listWeights, variables: { filter: filter}}) as GraphQLResult<ListWeightsQuery>;
    console.log("[Top] fetch weight data result:", result);
    if(result.data?.listWeights?.items){
      var wd: WeightData[]  = [] ;
      for(var item of result.data?.listWeights?.items){
        wd.push({
                  dataId:item!.id, 
                  weight:item!.weight, 
                  createAt:new Date(item!.createdAt)
                });
      }

      setPropsWeightData(wd);
    }
  }

  const createWeightData = async() => {
    // TODO Null確認をもっとよい書き方あるか調べる
    if(inputElementWeight.current){
      // TODO もっといい定義方法を探す
      var record = {
                      userId:"",
                      weight:0.0
                    }
      record.userId = stateUser.sub as string;
      record.weight = parseFloat(inputElementWeight.current.value);
      const result = await API.graphql({ query: mutations.createWeight, variables: {input: record}}) as GraphQLResult<CreateWeightMutation>;

      console.log("[Top] create weight data result:",result);

      inputElementWeight.current.value = "";
      
      if(result.data){
        var wd:WeightData = {
                              dataId:result.data.createWeight?.id as string, 
                              weight:result.data.createWeight?.weight as number, 
                              createAt: new Date(result.data.createWeight?.createdAt as string)
                            };
        setPropsWeightData([...propsWeightData, wd]);
      }
    }
    else{
        alert("[Top] 予期せぬエラー発生：HtmlElement取得ができませんでした。");
    }
  }

  const signOut = async() => {
    try{
      await Auth.signOut({global:true});
      console.log("[Top] successful signOut")
      location.push("/");
    }catch(err){
      console.log("[Top] signOut error : ", err)
    }
  }


  return (
    <div>
      <h1>Weighter</h1>
      <div className="menu_items">
        <div className="Menu_items--item"><button onClick={signOut}>サインアウト</button></div>
      </div>
      <div className="top_input--input">
          <input ref={inputElementWeight} type="text"></input>
          <button onClick={createWeightData}>記録</button>
      </div>
      <div className="data_list">
        <WeightList weightList={propsWeightData} />
      </div>
    </div>
  );
}



export default Top;