import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes';
import { GlobalStyles } from './styles/globalStyles';

interface Props {

}

export const App: React.FC<Props> = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles/>
    </ThemeProvider>
  )
}