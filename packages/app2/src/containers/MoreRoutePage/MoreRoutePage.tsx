import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import MoreRoutePageContext from './MoreRoutePageContext';
import request from '../../utils/request';

const Code = styled.code`
  overflow: auto;
  width: 100%;
  display: block;
`;

const MoreRoutePage = (): React.ReactElement => {
  const [response, setResponse] = React.useState<any>(null);
  const [isFetching, setIsFetching] = React.useState<boolean>(false);
  React.useEffect(() => {
    const fetchWeather = async () => {
      setIsFetching(true);
      try {
        const json = await request(
          'https://www.metaweather.com/api/location/1199477/',
        );
        setResponse(json);
      } catch (error) {
        setResponse(null);
      } finally {
        setIsFetching(false);
      }
    };
    fetchWeather();
  }, []);

  return (
    <MoreRoutePageContext.Provider value={{}}>
      <Helmet>
        <title>MoreRoutePage</title>
        <meta name="description" content="Description of MoreRoutePage" />
      </Helmet>
      <div>MoreRoutePage</div>
      {isFetching ? (
        'Fetching weather today...'
      ) : (
        <Code>{JSON.stringify(response)}</Code>
      )}
    </MoreRoutePageContext.Provider>
  );
};

export default MoreRoutePage;
