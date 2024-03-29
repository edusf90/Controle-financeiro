import styledComponents from 'styled-components'

export const Tr = styledComponents.tr``

export const Td = styledComponents.td`
  padding-top: 15px;
  text-align: ${props => (props.alignCenter ? 'center' : 'start')};
  word-break: break-all;

  svg{
    width: 18px;
    height: 18px;
  }
`
