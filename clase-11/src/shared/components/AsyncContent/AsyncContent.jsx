import './AsyncContent.css';

const AsyncContent = ({ loading, error, loadingText = 'Cargando...', children }) => {
  if (loading) {
    return <p className='async-status'>{loadingText}</p>;
  }

  if (error) {
    return (
      <div className='async-status async-status-error' role='alert'>
        <p>{error}</p>
      </div>
    );
  }

  return children;
};

export default AsyncContent;
