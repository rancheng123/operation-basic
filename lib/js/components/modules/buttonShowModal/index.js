import React, {Component, Fragment} from "react";
import {Button, Modal} from "antd";
import Bind from 'lodash-decorators/bind';
import Debounce from 'lodash-decorators/debounce';
/***
 * 点击按钮弹出弹窗
 */
export default class ButtonShowModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter_visible: false
        }
    }
    /**
     * 渲染弹窗
     */
    renderGoodsList() {
        const {
            modalTitle,
            modalWidth = '60%',
            modalProps = {
                className: 'mxj-model-blur',
                forceRender: true
            }
        } = this.props
        return (
            <Modal title={modalTitle}
                   width={modalWidth}
                   {...modalProps}
                   visible={this.state.filter_visible}
                   onOk={this.sureFilterOperation}
                   onCancel={this.onclickFilterCancle}>
                {/*渲染弹窗核心数据*/}
                {this.props.modalContent}
            </Modal>
        )
    }
    /**
     * 弹窗确认按钮
     */
    @Debounce(200)
    @Bind()
    sureFilterOperation() {

    }
    /**
     * 弹窗取消按钮
     * */
    @Debounce(200)
    @Bind()
    onclickFilterCancle() {
        this.setState({
            filter_visible: false
        })
    }
    /**
     * 显示弹窗
     */
    @Debounce(200)
    @Bind()
    showModal(){
        this.setState({
            filter_visible: true
        })
    }
    render() {
        const {
            btnTitle,
            btnProps = {
                type: 'primary',
                icon: 'plus'
            }
        } = this.props
        return(
            <Fragment>
                {/*渲染按钮*/}
                <Button {...btnProps} onClick={this.showModal}>{btnTitle}</Button>
                {/*渲染Modal*/}
                {this.renderGoodsList()}
            </Fragment>
        )
    }
}