import { ProviderWrapper as SatisfactionProviderWrapper } from "contexts/SatisfactionContext.jsx";
import App from "components/App/App.jsx";

const AppLoader = () => {
  return (
    <SatisfactionProviderWrapper>
      <App />
    </SatisfactionProviderWrapper>
  );
};

export default AppLoader;
