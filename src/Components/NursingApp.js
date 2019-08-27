import React,{ Component } from 'react';
import Header from './Header';
import RecordTable from './RecordTable';
import ButtonsPanel from './ButtonsPanel';
import { nursingTitles } from './utils';

export class NursingApp extends Component{
    constructor(){
        super();
        this.state={
            titles: nursingTitles,
            records: []
        }
    }

    componentWillMount(){
        const data = localStorage.getItem('records')
        const records = JSON.parse(data);
        if(records)
            this.setState({records});
    }

    onNursingRecordDurationChange(update,index){
        const {records} = this.state;
        records[index].duration = update;
        this.setState({records});

        const json = JSON.stringify(records);
        localStorage.setItem('records',json);


    }

    onNursingSidePress(side){
        var {records} = this.state;
        var today = new Date();
        var date = (today.getMonth()+1)+'/'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date+' '+time;
        const record = {
            time: dateTime,
            side,
            duration:''
        }
        records.unshift(record);
        console.log(records)
        this.setState({records});
        const json = JSON.stringify(records);
        localStorage.setItem('records',json);
    }

    resetAll(){
        this.setState({records:[]});
        localStorage.setItem('records',null);
    }

    removeByIndex(index){
        var {records} = this.state;
        records = records.filter((val,i) => i !== index);
        this.setState({records});

        const json = JSON.stringify(records);
        localStorage.setItem('records',json);

    }

    render(){
        const {titles,records} = this.state;
        return(
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <RecordTable
                            titles = {titles}
                            records = {records}
                            onNursingRecordDurationChange = {this.onNursingRecordDurationChange.bind(this)}
                            removeByIndex = {(index) => this.removeByIndex(index)}

                        />
                    </div>
                    <div className="row">
                        <ButtonsPanel
                            onNursingSidePress = {(side) => this.onNursingSidePress(side)}
                            resetAll = {() => this.resetAll()}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
