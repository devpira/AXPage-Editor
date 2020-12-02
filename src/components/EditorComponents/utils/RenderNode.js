import React, { useEffect } from 'react';
import { useNode, useEditor } from '@craftjs/core';
// import styled from 'styled-components';
// import ReactDOM from 'react-dom';
// import { ROOT_NODE } from '@craftjs/utils';

// const IndicatorDiv = styled.div`
//   height: 30px;
//   margin-top: -29px;
//   font-size: 12px;
//   line-height: 12px;
//   svg {
//     fill: #fff;
//     width: 15px;
//     height: 15px;
//   }
// `;

// const Btn = styled.a`
//   padding: 0 0px;
//   opacity: 0.9;
//   display: flex;
//   align-items: center;
//   > div {
//     position: relative;
//     top: -50%;
//     left: -50%;
//   }
// `;

const RenderNode = ({ render }) => {
    const { actions, query } = useEditor();
    const {
        id,
        isActive,
        isHover,
        dom,
        name,
        moveable,
        deletable,
        connectors: { connect, drag },
        parent,
    } = useNode((node) => ({
        isActive: node.events.selected,
        isHover: node.events.hovered,
        dom: node.dom,
        name: node.data.custom.displayName || node.data.displayName,
        moveable: query.node(node.id).isDraggable(),
        deletable: query.node(node.id).isDeletable(),
        parent: node.data.parent,
        props: node.data.props,
    }));

    // const currentRef = useRef();

    useEffect(() => {
        if (dom) {
            if (isActive || isHover) dom.classList.add('component-selected');
            else dom.classList.remove('component-selected');
        }
    }, [dom, isActive, isHover]);

    // const getPos = useCallback((dom) => {
    //     const { top, left, bottom } = dom
    //         ? dom.getBoundingClientRect()
    //         : { top: 0, left: 0, bottom: 0 };
    //     return {
    //         top: `${top > 0 ? top : bottom}px`,
    //         left: `${left}px`,
    //     };
    // }, []);


    return (
        render
    );
};

export default RenderNode;