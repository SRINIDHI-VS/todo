# create-sarva-app
A NextJS + Tailwind boilerplate for web application that comes with MODS design system by default. 

### Repo Structure standards
<details open>
		<summary>root</summary>
		<span>&rsaquo;build</span>
    <details>
      <summary>public</summary>
      <span>&rsaquo; assets(Brand Assets)</span> <br />
      <span>&rsaquo; icons</span> <br />
      <span>&rsaquo; images</span> <br />
      <span>manifest.json</span> <br />
		</details>
		<details open>
    	<summary>src</summary>
      <details>
		    <summary>components (All child components imported by Pages)</summary>
        <span>Navbar.jsx</span><br />
        <span>&rsaquo; Page1Components(Components for Page1)</span> <br />
        <span>&rsaquo; Page2Components(Components for Page2)</span> <br />
      </details>
       <details>
          <summary>layouts</summary>
          <span>Dashboard.jsx</span><br />
          <span>404.jsx</span><br />
          <span>Footer.jsx</span> <br />
      </details>
      <details>
          <summary>pages (Public Routes)</summary>
          <span>digitalMe.jsx </span> <br />
          <span>permissions.jsx</span> <br />
          <span>activity.jsx</span> <br />
          <span>avatars.jsx</span> <br />
      </details>
      <span>&rsaquo; pages.test</span> <br />
      <details>
          <summary>styles (All Custom CSS goes here)</summary>
          <span>global.css</span><br />
          <span>component1.module.css</span><br />
          <span>component2.module.css</span><br />
      </details>
      <details>
          <summary>templates (commonly used templates goes here)</summary>
          <span>&rsaquo; Buttons</span><br />
          <span>&rsaquo; Cards</span><br />
          <span>&rsaquo; Modals</span><br />
      </details>
    </details>
</details>

