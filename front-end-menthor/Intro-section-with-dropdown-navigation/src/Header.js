import React from 'react'
import styles from './Header.module.css'
import { ReactComponent as Logo } from './Assets/logo.svg'
import { ReactComponent as ArrowDown } from './Assets/icon-arrow-down.svg'
import { ReactComponent as ArrowUp } from './Assets/icon-arrow-up.svg'
import { ReactComponent as TodoList } from './Assets/icon-todo.svg'
import { ReactComponent as Calendar } from './Assets/icon-calendar.svg'
import { ReactComponent as Reminders } from './Assets/icon-reminders.svg'
import { ReactComponent as Planning } from './Assets/icon-planning.svg'
import Button from './Components/Button'
import Submenu from './Components/Submenu'
import useOutsideClick from './Hooks/useOutsideClick'

const Home = () => {
  const [mobileMenu, setMobileMenu] = React.useState(null)
  const [submenuFeatures, setSubmenuFeatures] = React.useState(false)
  const [submenuCompany, setSubmenuCompany] = React.useState(false)

  React.useEffect(() => {
    const widthChange = () => {
      const innerWidth = window.innerWidth
      innerWidth <= 730 ? setMobileMenu(true) : setMobileMenu(false)
    }

    widthChange()
    window.addEventListener('resize', widthChange)

    return () => {
      window.removeEventListener('resize', widthChange)
    }
  }, [mobileMenu])

  const toogleArrow = ({ target }) => {
    if (target.innerText === "Features") setSubmenuFeatures(!submenuFeatures)
    if (target.innerText === "Company") setSubmenuCompany(!submenuCompany)
  }

  const featuresRef = React.useRef(null)
  const companyRef = React.useRef(null)
  useOutsideClick(featuresRef, setSubmenuFeatures)
  useOutsideClick(companyRef, setSubmenuCompany)

  return (
    <header className={styles.header}>
      <ul className={styles.navs}>
        <li className={styles.logo}><a href='#'><Logo /></a></li>
        <div className={mobileMenu ? styles.menuMobile : styles.menuDesktop}>
          <li className={styles.navButtons} ref={featuresRef} onClick={toogleArrow}>
            <Button text="Features" submenu />
            {!submenuFeatures ? <ArrowDown /> : <ArrowUp />}
            {submenuFeatures && (
              <Submenu>
                <li>
                  <TodoList />
                  <a href="#">Todo List</a>
                </li>
                <li>
                  <Calendar />
                  <a href="#">Calendar</a>
                </li>
                <li>
                  <Reminders />
                  <a href="#">Reminders</a>
                </li>
                <li>
                  <Planning />
                  <a href="#">Planning</a>
                </li>
              </Submenu>
            )}

          </li>
          <li className={styles.navButtons} ref={companyRef} onClick={toogleArrow}>
            <Button text="Company" submenu />
            {!submenuCompany ? <ArrowDown /> : <ArrowUp />}
            {submenuCompany && (
              <Submenu>
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </Submenu>
            )}
          </li>
          <li className={styles.navButtons}><Button text="Careers" /></li>
          <li className={styles.navButtons}><Button text="About" /></li>
          <ul className={styles.navs}>
            <li><Button text="Login" /></li>
            <li><Button text="Register" border /></li>
          </ul>
        </div>
      </ul>

    </header>
  )
}

export default Home
