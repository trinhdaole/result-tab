
import React, {Component} from "react";
import PropTypes  from 'prop-types'
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
                fontFamily: 'Roboto',
                fontWeight: '600'
        };
        let descriptionStyle = {
            fontSize: '10',
            color: 'rgba(81,81,81,1)',
            fontFamily: 'Roboto',
        };

        let iconCheckStyle = {

            height: '10px',
            right: '10px',
            top: '14px',
            position: 'absolute',

        };

        let iconCheckStyle2 = {

            height: '10px',
            right: '30px',
            top: '14px',
            position: 'absolute',

        };

        let arrowIcon ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAYCAYAAAAlBadpAAAAAXNSR0IArs4c6QAAAepJREFUOBHNkz1oFFEUhc/ZNWtcgr9NwNLSOiCC0Y0hwd0REnCxCMFKraJ2phLttNNKUghpAuoWokk27I9oZWNjY5OAgYBgIQqSRBSzJ3fe7ryJTnZdsHFgmPvuPd/cc9+8Af6LS/VgQtXCrW7NMBKqElwA9NjuNMh7HFmcjmrtnilfoCYdGCakm6oGD3ytTRDDR7NFgM+9To1rqhRmJHl3vtYKPMzjpZ/IDJh1PIlFuoJqYVYqpuNcHCXe6oS1zUdm/ZKXkU/RMzDB3O1fPmdBAg6LzmoteGjBVS8mX8BGcw5byV3hCFA1fx/C9WhtX6GCvuw4T5a+hzk/sxfsCDhSvmGSuz4ljWJ9s6xXxb4w17FzBLmDI92J1oa9wYGD5zp29mLyi49doA0cOfzjr51VCy5DjRmbvaklX9vc+XDujrBt2CTEWdv/lkOzm8mOMldaDw20he0nuYgtzfkjS7zF/kPDPDH3zTlvB6t+fgyNrZJZ3eOE5DvswxBPLX6NwPCZ6Gw/RN4OxzPrmGkK+R6Z1Bnm5j/vBBOw6oVhNDRvHXudkFhGD04zV/70J/gbrEp+0IwsWcdsE+QHpDnIswsfdwPDXPydU+gHW1bJNaQ11AlMvNDmHTcHq3o5dixR7Cahlam93ej+WbMNwF6eB3c76+oAAAAASUVORK5CYII='

        let lineIcon    = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAGCAYAAACrZDylAAAAAXNSR0IArs4c6QAAAJRJREFUKBVjZICC+fPnm/7582cCIyOjyf///9lg4rSkgXb9Atp1hoWFpSAxMfE0yC5GELF48WLJnz9/XgNKCoD49AZAh31gZ2fXio2Nfc4EsvzHjx++A+UYkP0gu0FuALHBDgIxBgsAO4iDg2MzKNgGylEgu0FuANkPdhAo7piZmd2A/GOghEYvh0HtOgayG+QGkL0AHEk0K2UcjZAAAAAASUVORK5CYII='
        let checkIcon   = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAbCAYAAAAULC3gAAAAAXNSR0IArs4c6QAAAy9JREFUSA3NlktIVFEYx//fPJjGIi0oNCwftAvauYnQSgsjXASlRSSZM1mQURgtklr0XFhGhT3mDgapm2lRYKiRULRq0QNa9MCauZOVoBhZOUQ0c/rO6Nxx9MyjmMYGhvud//875/vdM989dwiz+Wn3VyAYPM8IRQD1A1n7aNZ4NF8NhOjk+haDgdA9O0Cat5Z3pJ2BzAaMDAjfTDFCJgYurxOCbsyACdem55ndIbe+n0Eu8VdVdxhmlGZuhzS9CaHQZTUMDYFMa1Bf/CYzQJreDBE6p+wIwiBMllI4C19JP9rhyuw0iJp+gmGOKVci8jHBOtQt1SP+vwVy6S0MczhSbNp1ALAyTP6Hqfq/AZJN6/ZfZJjGqcWiMb2EnSqwM38oqk1E6QcKw+jXuHn3TC8WHhNewDyHYfJGVP4EkMu/AiZRBgEdjoJeEAlVclJNCBPcujxj+OBTfIiegiwbsDvvs8INSwTNt52jDl5k4tQk6oPNvgW1uePxJin1B8KCAb0DENuUPtFjZGdXonrhmNKfFOVjf9aAkaIQlfgR6EPn6PzJnOSXJ8KKt7onAcwjZM9dnwxGFmIgkaWouBqBsX50+RcovFipR9jwzHebb2RzrGGM+pFr24jqxd8NJUHAQNQWxy9BIPgQ7UOL4viAZ9COj75u9jcpc4h6YKUqVC0JKH2FSHxn/IjqV/i6V+GzRK9hNpejftmnGN8zPA9fxu/yDpfF6MaA7iCnsAbV9NOQUgiiLzmXr5UXP6SeQ+/4KSyHo9gf9mV/Bb72cv4qZT6RB8sLd2At/VL6CcQokEzSvKf40W+Ok/8eJms57KFRjAfvcU6JOs/UgZyCOt6ZoNpPrMYCyVxNP8on7Gn1NPlWFiMMvVLp848PR1EDn2MhpZ+COBNITtJ8B7mnLqQwP5pCaGOYxr8+VCdXUgNJ0+1r4J24Gm76aFl1ZEIr91eT2vwzNf7/IUfRdW7aXXzHiXuBcCZdMBI9/g5Fbszt3YoQunhojUjGlXAczuKTxjgNQXIgWcTtr0IoeIsjm1GTcIRhWoxxmoLUgGQx+Y+AQgf4Z+RXjfkmnAX308Twfy/zG61t85ie8IlUAAAAAElFTkSuQmCC'

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
                    <div>
                        <div style={{backgroundColor:'rgba(244,247,250,1)', height:74,width:32,right: 160,top:-18, position: 'absolute',}}>
                            <Icon
                                style={{height: 2, right: 130, paddingTop: 35, }}
                                src={lineIcon}

                            />
                        </div>
                        <div style={{backgroundColor:'rgba(244,247,250,1)', height:74,width:32,right: 126,top:-18, position: 'absolute',}}>
                            <Icon
                                style={{height: 2, right: 100, paddingTop: 35,}}
                                src={lineIcon}

                            />
                        </div>

                        <div style={{backgroundColor:'rgba(244,247,250,1)', height:74,width:32,right: 92,top:-18, position: 'absolute',}}>
                            <Icon
                                style={{height: 10, right: 80, paddingTop: 30,}}
                                src={checkIcon}

                            />
                        </div>
                        <div style={{backgroundColor:'rgba(244,247,250,1)', height:74,width:32,right: 58,top:-18, position: 'absolute',}}>
                            <Icon
                                style={{height: 10, right: 50, paddingTop: 30,}}
                                src={checkIcon}

                            />
                        </div>

                        <Text
                            style={{
                                color: 'rgba(255,185,74,1)',
                                fontSize: 10,
                                fontFamily: 'Roboto-Bold',
                                height: 10,
                                right: 20,
                                top: 14,
                                position: 'absolute',
                            }}
                            text={'NEXT'}
                        />


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
