import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
   
    render() {
        const {label, onDelete, onToggleImpotant, onToggleLiked, important, like} = this.props;

        let classNames = 'app-list-item d-flex justify-content-between';
         
            if (important) {
            classNames += ' important';
        }
        if(like){
            classNames += ' like';
        }
        
       
        return (
            <div className={classNames}>
                <span className="app-list-item-label"
                      >
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        onClick={onToggleImpotant}
                        className="btn-star btn-sm"> 
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                   
                    <i onClick={onToggleLiked} className="fa fa-heart"></i>
                   
                </div>
            </div>
        )
    }
}