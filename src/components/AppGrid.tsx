import React from 'react';
import styled from 'styled-components';
import { ProductModel } from '../models/models';
import { colors } from '../styles/variables';
import AppProductCard from './AppProductCard';
interface Props {
  prodData: Array<ProductModel>;
}

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
  a {
    color: ${colors.text};
    text-decoration: none;
  }

  .col-md-3,
  .col-sm-6,
  .col-lg-3,
  .col-xs-6 {
    padding: 5px;
  }
`;

const AppGrid: React.FC<Props> = ({ prodData }) => {
  return (
    <Grid>
      {prodData.map((el) => {
        return (
          <AppProductCard
            col={'col-md-3 col-sm-6 col-lg-3 col-xs-6'}
            product={el}
            key={el.id}
          ></AppProductCard>
        );
      })}
    </Grid>
  );
};

export default AppGrid;
