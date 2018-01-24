import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import SearchField from './search_field';

ReactDOM.render(<SearchField />, document.getElementById('root'));
registerServiceWorker();
