import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import style from './style.css'

export default class Widget extends PureComponent {
    static propTypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        children: PropTypes.object,
    }

    render() {
        const { title, subtitle, children } = this.props

        return (
            <div className={style.widget}>
                <div className={style.header}>
                    <div className={style.label}>{title}</div>{' '}
                    {subtitle && <div className={style.subtitle}>{subtitle}</div>}
                </div>
                <div className={style.body}>{children}</div>
            </div>
        )
    }
}
