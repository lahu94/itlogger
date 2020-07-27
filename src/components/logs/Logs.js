import React, {useEffect} from 'react'
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import { getLogs } from '../../actions/logAction';

const Logs = ({ log: { logs, loading }, getLogs}) => {
  
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if(loading || logs === null) {
    return <Preloader />
  }

  return (
    <ul className='collection with-header'>
     <li className='collection-header'>
       <h4 className='center'>System Logs</h4>
     </li> 
     {!loading && logs.length === 0 ? (<p className='center'>No logs to show ...</p>) : (
       logs.map(log => <LogItem key={log.id} log={log} />)
     )}
    </ul>
  )
}

Logs.propTypes = {
  logs: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);