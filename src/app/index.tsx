import React from 'react';
import ReactDOM from 'react-dom/client';
import { Providers } from './providers';
import '@radix-ui/themes/styles.css';
import '@/app/styles/index.css';

import '../shared/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Providers />
	</React.StrictMode>
);
