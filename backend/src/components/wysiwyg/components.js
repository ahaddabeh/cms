import React from 'react'
import ReactDOM from 'react-dom'
import { cx, css } from 'emotion'

export const Button = React.forwardRef(
    ({ className, active, reversed, ...props }, ref) => (
        <span
            {...props}
            ref={ref}
            className={cx(
                className,
                css`
          cursor: pointer;
        `
            )}
        />
    )
)

export const EditorValue = React.forwardRef(
    ({ className, value, ...props }, ref) => {
        const textLines = value.document.nodes
            .map(node => node.text)
            .toArray()
            .join('\n')
        return (
            <div
                ref={ref}
                {...props}
                className={cx(
                    className,
                    css`
      
          `
                )}
            >
                <div
                    className={css`
            
          `}
                >
                    Slate's value as text
        </div>
                <div
                    className={css`
           
          `}
                >
                    {textLines}
                </div>
            </div>
        )
    }
)

export const _Icon = React.forwardRef(({ className, ...props }, ref) => (
    <span
        {...props}
        ref={ref}
        className={cx(
            'material-icons',
            className,
            css`
        font-size: 18px;
        vertical-align: text-bottom;
      `
        )}
    />
))

export const Icon = React.forwardRef(({ iconChoice, className, ...props }, ref) => {
    return <i
        {...props}
        ref={ref}
        className={cx(
            `fa fa-${iconChoice}`,
            `
        
        vertical-align: text-bottom;
      `
        )}
    />
})

export const Instruction = React.forwardRef(({ className, ...props }, ref) => (
    <div
        {...props}
        ref={ref}
        className={cx(
            className,
            css`
        white-space: pre-wrap;
        
        background: #f8f8e8;
      `
        )}
    />
))

export const Menu = React.forwardRef(({ className, ...props }, ref) => (
    <div
        {...props}
        ref={ref}
        className={cx(
            className,
            css`
        & > * {
          display: inline-block;
        }
        & > * + * {
          margin-left: 15px;
        }
      `
        )}
    />
))

export const Portal = ({ children }) => {
    return ReactDOM.createPortal(children, document.body)
}

export const Toolbar = React.forwardRef(({ className, ...props }, ref) => (
    <Menu
        {...props}
        ref={ref}
        className={cx(
            className,
            css`
        
      `
        )}
    />
))