import Header from '../components/header'
import ExtLink from '../components/ext-link'
import sharedStyles from '../styles/shared.module.css'

const RenderPage = () => (
  <>
    <Header titlePre="" />
    <div className={sharedStyles.layout}>
      <div className="explanation">
        <p>
          ネットの海を彷徨っています。Twitter⇨
          <ExtLink href="https://twitter.com/hydrargyrum800">
            @hydrargyrum800
          </ExtLink>
        </p>
      </div>
    </div>
  </>
)

export default RenderPage
