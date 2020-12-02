import React, { useEffect } from "react";
import { useNode, useEditor } from "@craftjs/core";
import { Resizer } from './Resizer';
import { Element } from "@craftjs/core";
import ImageSettings from './ImageSettings';

const defaultProps = {
    imageUrl: null,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fillSpace: 'no',
    padding: { top: '0', right: '0', bottom: '0', left: '0' },
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
    shadow: 0,
    radius: { topLeft: '0', topRight: '0', bottomRight: '0', bottomLeft: '0' },
    width: '50%',
    height: '20%',
    opacity: 1,
    border: 'none',
    borderWidth: '2',
    borderColor: { r: 0, g: 0, b: 0, a: 1 },
};


export const HiddenImageContainer = (props) => {
    const { actions } = useEditor();
    const { isActive, parent, connectors: { connect, drag } } = useNode((node) => ({
        isActive: node.events.selected,
        parent: node.data.parent,
    }));

    props = {
        ...props,
    };

    const {
        flexDirection,
        alignItems,
        justifyContent,
        fillSpace,
        padding,
        children,
    } = props;

    useEffect(() => {
        if (isActive) {
            actions.selectNode(parent);
        }
    }, [isActive]);


    return (
        <div
            ref={ref => connect(drag(ref))}
            style={{
                width: '100%',
                height: '100%',
                display: "flex",
                flexDirection,
                justifyContent,
                alignItems,
                background: "transparent",
                padding: `${padding.top}% ${padding.right}% ${padding.bottom}% ${padding.left}%`,
                flex: fillSpace === 'yes' ? 1 : 'unset',
            }}
        >
            {children}
        </div>
    )
}


HiddenImageContainer.craft = {
    displayName: 'Hidden Image Container',
    rules: {
        canDrag: () => true,
        canMoveIn: () => true,
    },
}


export const EditorImage = (props) => {
    props = {
        ...defaultProps,
        ...props,
    };
    const {
        imageUrl,
        flexDirection,
        justifyContent,
        alignItems,
        fillSpace,
        padding,
        margin,
        shadow,
        radius,
        opacity,
        border,
        borderWidth,
        borderColor,
    } = props;


    return (
        <Resizer
            propKey={{ width: 'width', height: 'height' }}

            style={{
                margin: `${margin.top}% ${margin.right}% ${margin.bottom}% ${margin.left}%`,
                boxShadow:
                    shadow === 0
                        ? 'none'
                        : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
                borderRadius: `${radius.topLeft}% ${radius.topRight}% ${radius.bottomRight}% ${radius.bottomLeft}%`,
                opacity,
                backgroundImage: imageUrl? `url(${imageUrl})` : `url('https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                flex: fillSpace === 'yes' ? 1 : 'unset',
                border: `${borderWidth}px ${border} rgba(${Object.values(borderColor)})`
            }}
            canvas
        >
            <Element id="HiddenImageContainer"
                is={HiddenImageContainer}

                key={(flexDirection +
                    justifyContent +
                    alignItems +
                    fillSpace +
                    padding.top + padding.right + padding.bottom + padding.left).toString()}

                flexDirection={flexDirection}
                justifyContent={justifyContent}
                alignItems={alignItems}
                fillSpace={fillSpace}
                padding={padding}


                canvas
            />
        </Resizer>
    )
}


EditorImage.craft = {
    displayName: 'Image',
    related: {
        settings: ImageSettings
    },
    props: defaultProps,
    rules: {
        canDrag: () => true,
        canMoveIn: () => true
    },
}
