import { useState } from 'react';
import { ipRights } from '../data/ipRights';
import PatentFilingLineChart from './PatentFilingLineChart';

const DataDisplay = () => {

  const [selectedDataset, setSelectedDataset] = useState("industrialDesigns");
  const [selectedField, setSelectedField] = useState("productLines");

  const dataset = ipRights[selectedDataset] || [];

  const primaryKeyMap = {
    patents: 'title',
    trademarks: 'mark',
    copyrights: 'workTitle',
    tradesecrets: 'secretName',
    industrialDesigns: 'designName',
    geographicalIndications: 'indication'
  };

  const primaryKey = primaryKeyMap[selectedDataset] || 'id';

  const availableFields = dataset.length > 0 
    ? Object.keys(dataset[0]).filter(key => key !== primaryKey)
    : [];

  let dateField = null;
  if (dataset.length > 0) {
    const firstItem = dataset[0];
    
    const possibleDateFields = Object.keys(firstItem).filter(key => {
      const val = firstItem[key];
      return typeof val === 'string' && !isNaN(Date.parse(val));
    });
    if (possibleDateFields.length > 0) {
      // Check if the first date field is the primary key
      dateField = possibleDateFields[0];
    }
  }

  return (
    <div style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Veri Görselleştirme</h1>

      {/* Select dataset */}
      <div style={{ marginBottom: '1rem' }}>
        <label>
          <strong>Dataset:</strong>&nbsp;
          <select 
            style={{ color: 'black', fontWeight: 'bold' }}
            value={selectedDataset} 
            onChange={(e) => {
              setSelectedDataset(e.target.value);
              // Check new dataset for available fields
              const newDataset = ipRights[e.target.value] || [];
              const newPrimaryKey = primaryKeyMap[e.target.value] || 'id';
              if (newDataset.length > 0) {
                const fields = Object.keys(newDataset[0]).filter(key => key !== newPrimaryKey);
                setSelectedField(fields[0]);
              }
            }}
          >
            {Object.keys(ipRights).map(key => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Select field */}
      <div style={{ marginBottom: '1rem' }}>
        <label>
          <strong>Alan (Field):</strong>&nbsp;
          <select 
            style={{ color: 'black', fontWeight: 'bold'}}
            value={selectedField} 
            onChange={(e) => setSelectedField(e.target.value)}
          >
            {availableFields.map(field => (
              <option key={field} value={field}>{field}</option>
            ))}
          </select>
        </label>
      </div>

      <h2>Sonuçlar</h2>
      <ul>
        {dataset.map(item => (
          <li key={item.id} style={{ marginBottom: '0.5rem' }}>
            <strong>{item[primaryKey]}</strong> → {selectedField}:{' '}
            {Array.isArray(item[selectedField])
              ? item[selectedField].join(', ')
              : item[selectedField]}
          </li>
        ))}
      </ul>

      
      {dateField && (
        <PatentFilingLineChart items={dataset} dateField={dateField} />
      )}
    </div>
  );
};

export default DataDisplay;
