<!-- Begin toolbar -->
<div class="toolbar">
	<div class="toolbar-inner">
		<div class="toolbar-buttons">
			<a href="/edit/server/" class="button button-secondary button-back js-button-back">
				<i class="fas fa-arrow-left icon-blue"></i><?= _("Back") ?>
			</a>
		</div>
	</div>
</div>
<!-- End toolbar -->

<div class="container">

	<div class="units js-units-container">
		<div class="header units-header">
			<div class="l-unit__col l-unit__col--right">
				<div class="clearfix l-unit__stat-col--left super-compact u-text-center">&nbsp;</div>
				<div class="clearfix l-unit__stat-col--left"><b><?= _("Category") ?></b></div>
				<div class="clearfix l-unit__stat-col--left wide-6"><b><?= _("Name") ?></b></div>
				<div class="clearfix l-unit__stat-col--left wide-2"><b><?= _("Status") ?></b></div>
			</div>
		</div>

		<div class="l-unit header animate__animated animate__fadeIn js-unit">
			<div class="l-unit__col l-unit__col--right">
				<div class="clearfix l-unit__stat-col--left super-compact u-text-center">
					<i class="fas fa-gear icon-blue"></i>
				</div>
				<div class="clearfix l-unit__stat-col--left"><b><?= _("System") ?></b></div>
				<div class="clearfix l-unit__stat-col--left wide-6"><b><?= _("Policy") ?>: <?= _("Allow suspended users to log in with read-only access") ?></b></div>
				<div class="clearfix l-unit__stat-col--left wide-2"><?= _("Partially implemented") ?></div>
			</div>
		</div>
	</div>

</div>

<footer class="app-footer">
</footer>
