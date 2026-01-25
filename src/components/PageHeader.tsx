import '@/styles/PageHeader.css';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  highlightText?: string;
}

const PageHeader = ({ title, subtitle, highlightText }: PageHeaderProps) => {
  const renderSubtitle = () => {
    if (!subtitle) return null;

    if (highlightText && subtitle.includes(highlightText)) {
      const parts = subtitle.split(highlightText);
      return (
        <p className="page-header-subtitle">
          {parts[0]}
          <span className="page-header-subtitle-highlight">
            {highlightText}
          </span>
          {parts[1]}
        </p>
      );
    }

    return <p className="page-header-subtitle">{subtitle}</p>;
  };

  return (
    <div className="page-header">
      <h1 className="page-header-title">{title}</h1>
      <div className="page-header-accent"></div>
      {renderSubtitle()}
    </div>
  );
};

export default PageHeader;
