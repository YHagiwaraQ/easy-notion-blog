import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'

const RenderPage = () => (
  <>
    <Header titlePre="" />
    <div className={sharedStyles.layout}>
      <div className="explanation">
        <p>
          大学生の日記です。Twitter⇨
          <ExtLink href="https://twitter.com/hydrargyrum800">
            @hydrargyrum800
          </ExtLink>
        </p>
      </div>
    </div>
  </>
)

export default RenderPage
