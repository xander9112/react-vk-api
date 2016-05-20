import React, {PropTypes, Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';

export default class Page extends Component {
    constructor (props) {
        super(props);
    }

    onYearBtnClick (e) {
        this.props.getPhotos(+e.target.textContent);
    }

    render () {
        const { year, photos, fetching, error } = this.props;
        const years = [ 2016, 2015, 2014, 2013, 2012, 2011, 2010 ];

        return (
            <div>
                {years.map((item, index) =>
                    <RaisedButton label={item} key={index} onTouchTap={::this.onYearBtnClick}/>
                )}

                <h3>{year} год [{photos.length}]</h3>
                { error ? <p className='error'> Во время загрузки фото произошла ошибка</p> : '' }
                {
                    fetching ?
                        <p>Загрузка...</p>
                        :
                        <GridList
                            cellHeight={200}
                        >
                            <Subheader>{year}</Subheader>
                            {photos.map((entry, index) => (
                                <GridTile
                                    key={index}
                                    title={entry.text}
                                    subtitle={entry.likes.count + ' ' + <IconButton><ThumbUp color="white" /></IconButton>}
                                >
                                    <img src={entry.src_big}/>
                                </GridTile>
                            ))}
                        </GridList>
                }
            </div>
        );
    }
}

Page.propTypes = {
    year:      PropTypes.number.isRequired,
    photos:    PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    error:     PropTypes.string.isRequired
};
