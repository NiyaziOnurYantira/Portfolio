import { useState, useEffect } from 'react';
import { ipRights } from '../data/ipRights';
import StatusPieChart from '../components/StatusPieChart';  // Tek bir dosya üzerinden her iki pie chart
import DataDisplay from '../components/DataDisplay';
import SummaryCard from '../components/SummaryCard';
import PatentFilingLineChart from '../components/PatentFilingLineChart';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sessionData = sessionStorage.getItem('ipRights');
      if (sessionData) {
        try {
          setData(JSON.parse(sessionData));
        } catch (error) {
          console.error('Invalid JSON data. Resetting data.', error);
          sessionStorage.removeItem('ipRights');
          sessionStorage.setItem('ipRights', JSON.stringify(ipRights));
          setData(ipRights);
        }
      } else {
        sessionStorage.setItem('ipRights', JSON.stringify(ipRights));
        setData(ipRights);
      }
    }
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '30px' }}>Dashboard</h1>
      
      {/* Summary cards */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2rem' }}>
        <SummaryCard title="Number of Patents" value={data.patents.length} />
        <SummaryCard title="Number of Brands" value={data.trademarks.length} />
        <SummaryCard title="Number of Copyrights" value={data.copyrights.length} />
        <SummaryCard title="Number of TradeSecrets" value={data.tradesecrets.length} />
        <SummaryCard title="Number of Industrial Designs" value={data.industrialDesigns.length} />
        <SummaryCard title="Number of Geographical Indications" value={data.geographicalIndications.length} />
        <SummaryCard title="Number of Software Licenses" value={data.softwareLicenses.length} />
        <SummaryCard title="Number of Domain Names" value={data.domainNames.length} />
      </div>

      {/* Pie Charts */}
      <StatusPieChart data={data} copyrights={data.copyrights} tradesecrets={data.tradesecrets} softwareLicenses={data.softwareLicenses} />
      
      {/* Line chart */}
      {data.patents && data.patents.length > 0 && (
        <PatentFilingLineChart patents={data.patents} />
      )}
      
      {/* Data Display */}
      <DataDisplay />
    </div>
  );
}
