import React from 'react';


class Songs extends React.Component {
   
  render () {
    const state = this.props.state;
    return (
      <div className="full-screen">
          <span >Songs </span>
          <ul className='songs-list'>
            {state.currentList.map((item, index) => {
              var songName = item.slice(item.indexOf('-')+2);
              if (state.activePos === index ) 
                return <li className='active' key={index}> {songName} </li>
              else if (state.song === item )
                return <li className='playing ' key={index}> {songName} </li>
              else
                return <li key={index} > {songName} </li>
            })}  
          </ul> 
      </div>
      );
  }
}

export default Songs;
