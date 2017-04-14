
import React, {Component, PropTypes} from "react";
import Text from   '../../common/text/text-component'
import Icon from   '../../common/icon/icon-component'

export default class CellMapFinderDropdownComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:this.props.data,

        };
    }

    /**
     * @desc This is callback function when click on item
     * @param {object} event - Event of element
     */
    onClick(event) {
        event.stopPropagation();
        event.preventDefault();
        let tempData = this.state.data;
        tempData.check =  !tempData.check;
        this.setState({
            data:tempData,
        });
        this.props.onClick(tempData,this.props.index);
    }



    render() {
        console.log('**** data ', this.state.data.place)
        let placeStyle = {
                fontSize: '12',
                color: 'rgba(81,81,81,1)',
                fontFamily: 'Roboto-Regular',
                fontWeight: '600'
        };
        let descriptionStyle = {
            fontSize: '10',
            color: 'rgba(81,81,81,1)',
            fontFamily: 'Roboto-Regular',
        };

        let iconCheckStyle = {

            height: '10px',
            right: '10px',
            top: '14px',
            position: 'absolute',

        };

        let arrowIcon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAYCAYAAAAlBadpAAAAAXNSR0IArs4c6QAAAepJREFUOBHNkz1oFFEUhc/ZNWtcgr9NwNLSOiCC0Y0hwd0REnCxCMFKraJ2phLttNNKUghpAuoWokk27I9oZWNjY5OAgYBgIQqSRBSzJ3fe7ryJTnZdsHFgmPvuPd/cc9+8Af6LS/VgQtXCrW7NMBKqElwA9NjuNMh7HFmcjmrtnilfoCYdGCakm6oGD3ytTRDDR7NFgM+9To1rqhRmJHl3vtYKPMzjpZ/IDJh1PIlFuoJqYVYqpuNcHCXe6oS1zUdm/ZKXkU/RMzDB3O1fPmdBAg6LzmoteGjBVS8mX8BGcw5byV3hCFA1fx/C9WhtX6GCvuw4T5a+hzk/sxfsCDhSvmGSuz4ljWJ9s6xXxb4w17FzBLmDI92J1oa9wYGD5zp29mLyi49doA0cOfzjr51VCy5DjRmbvaklX9vc+XDujrBt2CTEWdv/lkOzm8mOMldaDw20he0nuYgtzfkjS7zF/kPDPDH3zTlvB6t+fgyNrZJZ3eOE5DvswxBPLX6NwPCZ6Gw/RN4OxzPrmGkK+R6Z1Bnm5j/vBBOw6oVhNDRvHXudkFhGD04zV/70J/gbrEp+0IwsWcdsE+QHpDnIswsfdwPDXPydU+gHW1bJNaQ11AlMvNDmHTcHq3o5dixR7Cahlam93ej+WbMNwF6eB3c76+oAAAAASUVORK5CYII='

        const onClick = (event) => this.onClick(event);
        if(this.props.data){
            return (
                <div  className="list-item-container" onClick={onClick}>

                    <div className="listItem-textWrapper">
                        <p>
                            <Text
                                style={placeStyle}
                                text={this.props.data.place ? this.props.data.place : ' empty'}
                            />
                        </p>
                        <p style={{marginTop:-7}}>
                            <Text
                                style={descriptionStyle}
                                text={this.props.data.description?this.props.data.description:' empty'}
                            />
                        </p>

                    </div>


                    <Icon
                        src={arrowIcon}
                        style={iconCheckStyle}
                    />

                    <style>{css}</style>
                </div>
            );
        }else{
            return null;
        }


    }
}

CellMapFinderDropdownComponent.propTypes = {

    data: PropTypes.any,
    onClick: PropTypes.func,
    index: PropTypes.number,
};

const css = `
  .list-item-container {  
      height: 56px; 
      
      
      position: relative;
       
      background-color: white;
      
      
      border-bottom: 1px solid #EAEAEA;
      
    }
      .listItem-textWrapper{
        margin: 18px 0 0 5px ;
      }
`;
