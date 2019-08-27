import React from 'react';
import { Table } from 'react-bootstrap';
import './Styles/_table.css';


class RecordTable extends React.Component{
    renderTitles(){
        return this.props.titles.map((title,index) => {
            return <th key={index}>{title}</th>
        });
    }

    renderList(){
        return this.props.records.map((record,index) => {
            return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{record.time}</td>
                    <td>{record.side}</td>
                    <td>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Time" 
                            value={record.duration}
                            onChange={(event) => {this.props.onNursingRecordDurationChange(event.target.value,index)}}
                        />
                    </td>
                    <td>
                        <div
                            style={{cursor:'pointer'}}
                            onClick = {() => this.props.removeByIndex(index)}
                        >X</div>
                    </td>
                </tr>
            )
        });
    }
    render(){
        return(
            <Table striped bordered hover className="recordTable">
            <thead>
                <tr>
                <th>#</th>
                {this.renderTitles()}
                <th></th>
                </tr>
            </thead>
            <tbody>
                {this.renderList()}
            </tbody>
        </Table>
        );
    }
}

export default RecordTable;