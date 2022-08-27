import { TailSpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="center" style={{
        height: '100vh'
    }}>
    <TailSpin ariaLabel="loading-indicator" color="grey"/>
    </div>
  )
}