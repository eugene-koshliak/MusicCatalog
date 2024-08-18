import React, {FC} from 'react';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';

interface Props {
  html: string;
  textColor?: string;
}

const HtmlText: FC<Props> = ({html}) => {
  const tagsStyles = {
    body: {
      color: 'black',
      fontSize: 16,
      fontWeight: '400',
      marginTop: 4,
    },
    a: {
      color: 'blue',
      padding: '0px 0px',
    },
  };
  return (
    <RenderHtml
      source={{html: html}}
      tagsStyles={tagsStyles}
      contentWidth={useWindowDimensions().width}
    />
  );
};

export default HtmlText;
