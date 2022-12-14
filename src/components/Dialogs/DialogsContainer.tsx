import React, {ComponentType} from "react";
import {
    dialogsPageType,
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {stateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapStateToPropsType = {
    dialogsPage: dialogsPageType
}
type mapDispatchToPropsType = {
    updateNewMessageText: (newText: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: stateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessageText: (newMessageText) => dispatch(updateNewMessageTextActionCreator(newMessageText)),
        sendMessage: () => dispatch(sendMessageActionCreator())
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)