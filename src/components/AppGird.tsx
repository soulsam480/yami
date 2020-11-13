import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductModel } from "../models/models";
import { colors } from "../styles/variables";
interface Props {
  prodData: Array<ProductModel>;
}

const Grid = styled.div`
  a {
    color: ${colors.text};
    text-decoration: none;
  }
  .prod {
    img {
      vertical-align: middle;
      width: 100%;
      max-width: 100%;
      border-radius: 2px;
    }
  }
`;

const AppGird: React.FC<Props> = ({ prodData }) => {
  return (
    <Grid className="row">
      {prodData.map((el) => {
        return (
          <div className="col-sm-3 col-md-3 col-xs-6" key={el.id}>
            <Link to={`/p/${el.id}`}>
              <div className="prod">
                <img src={el.image} alt="" />
                <p> {el.title} </p>
              </div>
            </Link>
          </div>
        );
      })}
    </Grid>
  );
};

export default AppGird;
