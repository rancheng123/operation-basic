//多操作下拉级联
import React, { Component } from 'react';
import {
  Select, Col, Row, Button, Icon
} from 'antd';
import "./index.scss"
const Option = Select.Option;
class MxjOperateSelect extends Component {
    constructor(props) {
        super(props);
        const defaultRows = [{cityV : '',cityData : props.dataSource.cityData ,spaceV : '',spaceData : props.dataSource.spaceData[props.dataSource.cityData[0]]}];
        this.state = {
            spaceData : props.dataSource.spaceData[props.dataSource.cityData[0]],
            rows : !props.dataSource.showData ? defaultRows : props.dataSource.showData 
          }
        
    }
    handleCityChange = (value,index) => {
        let rows = this.state.rows;
        rows[value].cityV = this.props.dataSource.cityData[index];
        rows[value].spaceV = this.props.dataSource.spaceData[this.props.dataSource.cityData[index]];
        this.setState({
          rows
        });
      }
    handleSpaceChange = (value,index)=>{
    let rows = this.state.rows;
    rows[value].spaceV = rows[value].spaceData[index];
    this.setState({
        rows
    });
    }
    addRow = ()=>{
    let rows = this.state.rows;
    rows.push({cityV : '',cityData : this.props.dataSource.cityData,spaceV : '',spaceData : this.props.dataSource.spaceData[this.props.dataSource.cityData[0]]});
    this.setState({
        rows
    });
    }
    deleteRow = index=>{
    let rows = this.state.rows; 
    rows.splice(index,1);
    this.setState({
        rows
    });
    }
    render() {
        const isEdit = (String(this.props.isEdit) == "undefined") || (String(this.props.isEdit) == "true") ? true : false
        let tableCSS = {
            container : {border : '1px solid #E9E9E9',borderRadius: 4,boxSizing : 'content-box'},
            tableHead : {height : 40,paddingLeft : 32,backgroundColor : 'rgba(114,126,139,0.06)',lineHeight : '40px',borderBottom : "1px solid #E9E9E9"},
            tableRow : {padding : '7px 0',paddingLeft : 32,borderBottom : "1px solid #E9E9E9",display: 'flex',alignItems: 'center',},
            selectW : {width : 160},
            btn : {width : 360,margin : '8px auto',height : 32,border : '1px dashed #E9E9E9',color : '#BFBFBF',display : isEdit ? 'block' : 'none'}
        };
        let titleData = ["城市","场地"];
        tableCSS = this.props.tableCSS ? Object.assign(tableCSS,this.props.tableCSS) : tableCSS 
        titleData = this.props.dataSource.titleData ? this.props.dataSource.titleData : titleData
        
        return (
            <Col className="mxj_operate_select" style={tableCSS.container}>
                <Row style={tableCSS.tableHead}>
                    {
                        titleData.map((t,i)=>{
                            return <Col span={12} key={i}>
                            <span><em className="space_em">*</em>{t}</span>
                            </Col>
                        })
                    }
                </Row>
                {
                    this.state.rows.map((r,i)=>{
                    return (<Row key={i} style={tableCSS.tableRow}>
                
                    <Col span={12}>
                        {isEdit ? (<Select style={tableCSS.selectW} 
                        value = {r.cityV ? r.cityV : "请选择销售城市"}
                        onChange={this.handleCityChange.bind(this,i)} 
                        placeholder="请选择销售城市">
                        {
                            r.cityData.map((c,i)=>{
                            return <Option value={i} key={i}>{c}</Option>
                            })
                        }
                        
                        </Select>) : (<span>{r.cityV}</span>)}
                    </Col>
                    <Col span={12}>
                        {isEdit ? (<Select style={tableCSS.selectW}
                        value = {r.spaceV ? r.spaceV : "请选择销售场地"}
                        onChange={this.handleSpaceChange.bind(this,i)}
                        placeholder="请选择销售场地">
                        {
                            r.spaceData.map((s,i)=>{
                            return <Option value={i} key={i}>{s}</Option>
                            })
                        } 
                    </Select>) : (<span>{r.spaceV}</span>)}
                    </Col>
                    <Col style={{position : "absolute",right : 16}}>
                        <Icon type="delete" onClick={this.deleteRow.bind(this,i)} style={{color : 'red',display : isEdit ? 'block' : 'none'}} />
                    </Col>
                    </Row>)
                    })
                }
                <Row>
                    <Button style={tableCSS.btn} onClick={this.addRow} icon="plus">新增</Button> 
                </Row>
                {this.props.children}
            </Col>
        );
    }
}

export default MxjOperateSelect;

