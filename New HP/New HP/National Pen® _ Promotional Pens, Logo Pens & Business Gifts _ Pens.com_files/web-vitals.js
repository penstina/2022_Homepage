import{getCLS,getFID,getLCP}from"https://unpkg.com/web-vitals@0.2.4/dist/web-vitals.es5.min.js?module";function sendToGTM(e){let t={event:"web_vitals",wv_id:e.id,label:e.name,value:Math.round("CLS"===e.name?1e3*e.delta:e.delta)};window.np.logGaEvent(t),window.dataLayer.push(t)}getCLS(sendToGTM),getFID(sendToGTM),getLCP(sendToGTM);